<?php
// Set content type to JSON for API response
header('Content-Type: application/json');

// Define the directory where files will be uploaded
// IMPORTANT: Make sure this directory exists and is writable by the web server.
// For security, it's best to place this outside the public web root if possible,
// but for a simple setup, a 'uploads' folder within your site is common.
$uploadDirectory = 'assignments_uploads/';

// Check if the upload directory exists, if not, try to create it
if (!is_dir($uploadDirectory)) {
    if (!mkdir($uploadDirectory, 0777, true)) { // 0777 grants full permissions, adjust as needed for security
        echo json_encode(['success' => false, 'message' => 'Upload directory could not be created.']);
        exit;
    }
}

// Check if the form was submitted via POST method
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validate input fields
    $assignmentTitle = $_POST['assignmentTitle'] ?? '';
    $studentName = $_POST['studentName'] ?? '';

    if (empty($assignmentTitle) || empty($studentName)) {
        echo json_encode(['success' => false, 'message' => 'Assignment Title and Student Name are required.']);
        exit;
    }

    // Check if a file was uploaded without errors
    if (isset($_FILES['assignmentFile']) && $_FILES['assignmentFile']['error'] === UPLOAD_ERR_OK) {
        $file = $_FILES['assignmentFile'];

        // Get file details
        $fileName = $file['name'];
        $fileTmpName = $file['tmp_name'];
        $fileSize = $file['size'];
        $fileType = $file['type'];

        // Get file extension
        $fileExt = strtolower(pathinfo($fileName, PATHINFO_EXTENSION));

        // Allowed file extensions and max file size
        $allowedExtensions = ['pdf', 'doc', 'docx', 'zip'];
        $maxFileSize = 5 * 1024 * 1024; // 5MB

        // Validate file extension
        if (!in_array($fileExt, $allowedExtensions)) {
            echo json_encode(['success' => false, 'message' => 'Invalid file type. Only PDF, DOC, DOCX, and ZIP are allowed.']);
            exit;
        }

        // Validate file size
        if ($fileSize > $maxFileSize) {
            echo json_encode(['success' => false, 'message' => 'File size exceeds the maximum limit (5MB).']);
            exit;
        }

        // Generate a unique file name to prevent overwrites and improve security
        // Example: Assignment1_JohnDoe_20250719_uniquehash.pdf
        $uniqueFileName = sanitizeFileName($assignmentTitle) . '_' . sanitizeFileName($studentName) . '_' . date('Ymd_His') . '_' . uniqid() . '.' . $fileExt;
        $destinationPath = $uploadDirectory . $uniqueFileName;

        // Move the uploaded file to the desired directory
        if (move_uploaded_file($fileTmpName, $destinationPath)) {
            echo json_encode([
                'success' => true,
                'message' => 'Assignment submitted successfully!',
                'fileName' => $uniqueFileName,
                'filePath' => $destinationPath
            ]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Failed to move uploaded file.']);
        }
    } else {
        // Handle file upload errors
        $phpFileUploadErrors = array(
            UPLOAD_ERR_INI_SIZE => 'The uploaded file exceeds the upload_max_filesize directive in php.ini.',
            UPLOAD_ERR_FORM_SIZE => 'The uploaded file exceeds the MAX_FILE_SIZE directive that was specified in the HTML form.',
            UPLOAD_ERR_PARTIAL => 'The uploaded file was only partially uploaded.',
            UPLOAD_ERR_NO_FILE => 'No file was uploaded.',
            UPLOAD_ERR_NO_TMP_DIR => 'Missing a temporary folder.',
            UPLOAD_ERR_CANT_WRITE => 'Failed to write file to disk.',
            UPLOAD_ERR_EXTENSION => 'A PHP extension stopped the file upload.'
        );
        $errorMessage = $_FILES['assignmentFile']['error'] === UPLOAD_ERR_NO_FILE ? 'Please select a file to upload.' : ($phpFileUploadErrors[$_FILES['assignmentFile']['error']] ?? 'Unknown file upload error.');
        echo json_encode(['success' => false, 'message' => $errorMessage]);
    }
} else {
    // If not a POST request, return an error
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
}

/**
 * Sanitizes a string to be used as part of a file name.
 * Removes special characters and replaces spaces with underscores.
 * @param string $string The input string.
 * @return string The sanitized string.
 */
function sanitizeFileName($string) {
    // Remove anything that isn't a letter, number, space, or hyphen
    $string = preg_replace('/[^a-zA-Z0-9\s-]/', '', $string);
    // Replace spaces and multiple hyphens with a single underscore
    $string = preg_replace('/[\s-]+/', '_', $string);
    // Trim underscores from the beginning and end
    $string = trim($string, '_');
    return $string;
}
?>
