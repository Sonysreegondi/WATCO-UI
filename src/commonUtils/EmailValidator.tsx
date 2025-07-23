
export const isValidEmail = (email: string): string | boolean => {
    // Convert the email to lowercase to handle capital letters
    email = email.toLowerCase();

    // Regular expression for email validation
    // const emailRegex = /^[a-z][a-z0-9._]{4,}[a-z0-9]@[a-z0-9-]+\.[a-z]{2,}$/;
    const emailRegex = /^[a-z][a-z0-9._]{4,}[a-z0-9]@[a-z0-9-]+\.(com|org|net|in|co(\.in)|edu|gov|co\.in|ac\.in)$/;

    // Check if the email contains consecutive dots (..) or underscores (__)
    if (email.includes('..') || email.includes('__')) {
        return false;
    }

    // Extract the local part of the email (before the '@')
    const localPart = email.split('@')[0];

    // Ensure the local part has at least 6 characters excluding dots
    if (localPart.replace(/\./g, '').length < 6) {
        return false;
    }

    // Test the email against the regular expression
    if (emailRegex.test(email)) {
        // Return the email as all lowercase if it's valid
        return email;
    }

    // Return false if the email is invalid
    return false;
};
