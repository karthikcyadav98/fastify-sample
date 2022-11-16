exports.sendOtpTemplate = (otp) =>
  `${otp} is your mobile verification code, Please DO NOT share this OTP/Code with anyone. 

    Warm Regards, 
    Team Neokred`;

exports.sendOtpProfilexTemplate = (otp) =>
  `Your OTP for Neokred is <#>${otp}. Do not disclose it to anyone.\nWarm Regards,\nTeam Neokred`;

exports.sendLinkProfilexTemplate = (clientName, link) =>
  `${clientName} has requested for a credit bureau report. Use this link to give acceptance to ${link}\nWarm Regards,\nTeam Neokred`;
