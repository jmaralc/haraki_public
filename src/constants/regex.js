//Regexp for users names
const userRegexString = "[^a-zA-Z0-9]"
export const userRegex = new RegExp(userRegexString)

// Regexp for a valid email
const emailRegexString = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
export const emailRegex = new RegExp(emailRegexString)