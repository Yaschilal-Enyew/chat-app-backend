export const WELCOME_TEMPLATE = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Welcome to AuraChat!</title>
    <style type="text/css">
        /* Basic reset for email clients */
        body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
        table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
        img { -ms-interpolation-mode: bicubic; border: 0; }
        
        /* General styling for links, buttons, etc. */
        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        /* Mobile-specific styles for better display on small screens */
        @media only screen and (max-width: 600px) {
            .mobile-hide { display: none !important; }
            .main-content { width: 100% !important; padding: 20px !important; }
            .button { width: 100% !important; }
            .button a { width: 100% !important; display: block; }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f0fdf4;">
    <center style="width: 100%; background-color: #f0fdf4; font-family: sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            <!-- Main container table -->
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                <tr>
                    <td align="center" style="background-color: #16a34a; background-image: linear-gradient(135deg, #16a34a 0%, #064e3b 100%); padding: 60px 0 40px 0;">
                        <!-- Logo/Header graphic -->
                        <div style="width: 80px; height: 80px; background-color: rgba(255, 255, 255, 0.2); border-radius: 50%; margin-bottom: 20px;">
                            <!-- Placeholder for an SVG or simple icon -->
                            <span style="display: block; font-size: 50px; color: #ffffff; line-height: 80px;">✨</span>
                        </div>
                        <h1 style="color: #ffffff; font-size: 38px; font-weight: bold; margin: 0; padding: 0;">
                            Welcome to AuraChat!
                        </h1>
                    </td>
                </tr>
                <tr>
                    <td align="center" style="padding: 40px 30px; background-color: #ffffff; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td style="color: #333333; font-size: 16px; line-height: 24px;">
                                    <p style="margin: 0; font-size: 20px; font-weight: bold;">Hi {{fullName}}!,</p>
                                    <p style="margin: 20px 0 0;">
                                        We're so happy to have you join the AuraChat community. Your journey to connect with new people and share your unique perspectives starts now.
                                    </p>
                                    <p style="margin: 20px 0 0; font-weight: bold; font-style: italic;">
                                        Explore, connect, and let your aura shine.
                                    </p>
                                    <p style="margin: 20px 0 0;">
                                        To help you get started, here are a few things you can do right away:
                                    </p>
                                    <ul style="padding: 0; margin: 20px 0; list-style-type: none;">
                                        <li style="margin-bottom: 15px;">
                                            <span style="font-weight: bold; color: #16a34a;">1. Complete Your Profile:</span> Let the community know who you are and what you're passionate about.
                                        </li>
                                        <li style="margin-bottom: 15px;">
                                            <span style="font-weight: bold; color: #16a34a;">2. Find a Chatroom:</span> Dive into conversations that interest you, or start your own.
                                        </li>
                                        <li>
                                            <span style="font-weight: bold; color: #16a34a;">3. Say Hello:</span> Share your first message in the main chat—we're all excited to meet you!
                                        </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="padding: 30px 0 0 0;">
                                    <table border="0" cellpadding="0" cellspacing="0">
                                        <tr>
                                            <td align="center" style="background-color: #16a34a; background-image: linear-gradient(135deg, #16a34a 0%, #15803d 100%); border-radius: 50px;">
                                                <a href="#" target="_blank" style="font-size: 16px; font-weight: bold; font-family: sans-serif; color: #ffffff; text-decoration: none; padding: 15px 30px; border-radius: 50px; display: inline-block;">
                                                    Start Your AuraChat
                                                </a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="center" style="padding: 30px 30px 0; font-family: sans-serif; font-size: 14px; color: #999999;">
                        <p style="margin: 0;">Questions? Reply to this email and we'll be happy to help.</p>
                        <p style="margin: 20px 0 0;">
                            <a href="#" style="color: #999999; text-decoration: none;">Twitter</a> | 
                            <a href="#" style="color: #999999; text-decoration: none;">Facebook</a> | 
                            <a href="#" style="color: #999999; text-decoration: none;">Instagram</a>
                        </p>
                        <p style="margin: 20px 0 0;">&copy; 2025 AuraChat. All rights reserved.</p>
                    </td>
                </tr>
            </table>
        </div>
    </center>
</body>
</html>
`

export const PASSWORD_RESET_TEMPLATE = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>AuraChat - Password Reset</title>
    <style type="text/css">
        /* Basic reset for email clients */
        body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
        table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
        img { -ms-interpolation-mode: bicubic; border: 0; }
        
        /* General styling for links, buttons, etc. */
        a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
        }

        /* Mobile-specific styles */
        @media only screen and (max-width: 600px) {
            .mobile-hide { display: none !important; }
            .main-content { width: 100% !important; padding: 20px !important; }
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f8fafc; font-family: sans-serif;">
    <center style="width: 100%; background-color: #f8fafc;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            <!-- Main container table -->
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
                <tr>
                    <td align="center" style="background-color: #1e3a8a; background-image: linear-gradient(135deg, #1e3a8a 0%, #172554 100%); padding: 50px 0 30px 0;">
                        <h1 style="color: #ffffff; font-size: 32px; font-weight: bold; margin: 0; padding: 0;">
                            Password Reset
                        </h1>
                    </td>
                </tr>
                <tr>
                    <td align="center" style="padding: 40px 30px; background-color: #ffffff; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td style="color: #333333; font-size: 16px; line-height: 24px;">
                                    <p style="margin: 0; font-size: 18px; font-weight: bold;">Hello [User Name],</p>
                                    <p style="margin: 20px 0 0;">
                                        We received a request to reset your AuraChat password. To complete this process, please use the following one-time password (OTP).
                                    </p>
                                    
                                    <!-- OTP Code Section -->
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" style="margin-top: 30px; margin-bottom: 30px; background-color: #e0f2fe; border-radius: 8px;">
                                        <tr>
                                            <td align="center" style="padding: 20px 40px; border: 1px dashed #93c5fd;">
                                                <span style="font-family: monospace; font-size: 36px; font-weight: bold; color: #1e3a8a;">{{otp}}</span>
                                            </td>
                                        </tr>
                                    </table>
                                    
                                    <p style="margin: 0;">
                                        This code is only valid for 15 minute. Please do not share this code with anyone.
                                    </p>
                                    <p style="margin: 20px 0 0;">
                                        If you did not request a password reset, you can safely ignore this email.
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="center" style="padding: 30px 30px 0; font-family: sans-serif; font-size: 14px; color: #999999;">
                        <p style="margin: 0;">AuraChat Security</p>
                        <p style="margin: 20px 0 0;">&copy; 2025 AuraChat. All rights reserved.</p>
                    </td>
                </tr>
            </table>
        </div>
    </center>
</body>
</html>
`