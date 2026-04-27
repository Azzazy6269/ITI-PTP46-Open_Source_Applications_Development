<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add User Form</title>
</head>

<style>
    body {
        background-color: #f3f4f6;
        font-family: 'Inter', sans-serif;
        display: flex;
        justify-content: center;
        padding: 20px;
    }
    .container {
        background: white;
        padding: 40px;
        border-radius: 10px;
        width: 100%;
        max-width: 850px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
    .row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        margin-bottom: 20px;
    }
    .full-width { width: 100%; margin-bottom: 20px; }
    
    label {
        display: block;
        font-size: 13px;
        font-weight: 600;
        color: #4b5563;
        margin-bottom: 8px;
    }
    input, select, textarea {
        width: 100%;
        padding: 12px;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        background-color: #f9fafb;
        box-sizing: border-box;
    }
    .bg-blue { background-color: #eff6ff; } /* اللون اللبني الخفيف في اليوزر نيم */

    .radio-group, .checkbox-group {
        display: flex;
        gap: 20px;
        padding: 12px;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        background: #f9fafb;
    }
    
    .captcha-container {
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 15px;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        background: #f9fafb;
    }
    .captcha-box {
        background: white;
        padding: 10px 20px;
        border: 1px solid #ddd;
        font-style: italic;
        letter-spacing: 4px;
        font-weight: bold;
    }
    .captcha-input { width: 200px; }

    .form-footer {
        display: flex;
        justify-content: flex-end;
        gap: 20px;
        margin-top: 30px;
    }
    .btn-cancel {
        background: none;
        border: none;
        color: #6b7280;
        cursor: pointer;
        font-weight: 500;
    }
    .btn-add {
        background: #6366f1;
        color: white;
        padding: 10px 30px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
    }
    .password-wrapper { position: relative; }
    .eye-icon {
        position: absolute;
        right: 15px;
        top: 38px;
        color: #9ca3af;
    }
</style>

<body>

<div class="container">
    <form action="save.php" method="POST" enctype="multipart/form-data">
        <div>
            <?php
                if(isset($_GET['errors'])){
                    $errors = json_decode($_GET['errors']);
                    if(is_array($errors) && count($errors) > 0){
                        foreach($errors as $error){
                            echo "<h5>$error</h5>";
                        }
                    }
                }       
            ?>
        </div>
        <div class="row">
            <div class="field-group">
                <label>First Name</label>
                <input type="text" name="first_name" placeholder="Alex">
            </div>
            <div class="field-group">
                <label>Last Name</label>
                <input type="text" name="last_name" placeholder="Rivera">
            </div>
        </div>

        <div class="row">
            <div class="field-group">
                <label>Country</label>
                <select name="country">
                    <option value="">Select a country</option>
                    <option value="Egypt">Egypt</option>
                    <option value="USA">USA</option>
                </select>
            </div>
            <div class="field-group">
                <input type="hidden" name="department" placeholder="Open Source" value="Open Source">
            </div>
        </div>

        <div class="field-group full-width">
            <label>Residential Address</label>
            <textarea name="address" placeholder="Enter full street address, city, and postal code..."></textarea>
        </div>

        <div class="field-group full-width">
            <label>Gender</label>
            <div class="radio-group">
                <input type="radio" id="male" name="gender" value="male"><label for="male">Male</label>
                <input type="radio" id="female" name="gender" value="female"><label for="female">Female</label>
                <input type="radio" id="other" name="gender" value="other"><label for="other">Other</label>
            </div>
        </div>

        <div class="row">
            <div class="field-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="user1@gmail.com" class="bg-blue" >
            </div>
            <div class="field-group password-wrapper">
                <label>Password</label>
                <input type="password" name="password" placeholder="........." class="bg-blue">
                <span class="eye-icon">👁️</span>
            </div>
        </div>

        <!--div class="field-group full-width">
            <label>Professional Skills</label>
            <div class="checkbox-group">
                <label><input type="checkbox" name="skills[]" value="HTML"> HTML</label>
                <label><input type="checkbox" name="skills[]" value="CSS"> CSS</label>
                <label><input type="checkbox" name="skills[]" value="JavaScript"> JavaScript</label>
                <label><input type="checkbox" name="skills[]" value="PHP"> PHP</label>
                <label><input type="checkbox" name="skills[]" value="MySQL"> MySQL</label>
                <label><input type="checkbox" name="skills[]" value="Python"> Python</label>
            </div>
        </div-->

        <div class="field-group full-width">
            <label>Verification</label>
            <div class="captcha-container">
                <div class="captcha-box">X 7 2 B P</div>
                <button type="button" class="refresh-btn">🔄</button>
                <input type="text" placeholder="Enter captcha" class="captcha-input">
            </div>
        </div>

        <div class="field-group full-width">
            <label>Profile Image</label>
            <div class="file-input-wrapper">
                <input type="file" name="profile_image">
            </div>
        </div>

        <div class="form-footer">
            <button type="button" class="btn-cancel">Cancel</button>
            <button type="submit" class="btn-add">Add User</button>
        </div>

    </form>
</div>

</body>
</html>