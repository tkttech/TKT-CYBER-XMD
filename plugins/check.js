const axios = require("axios");
const { cmd } = require("../command");

// Helper function to convert a country ISO code to its flag emoji
function getFlagEmoji(countryCode) {
  if (!countryCode) return "";
  return countryCode
    .toUpperCase()
    .split("")
    .map(letter => String.fromCodePoint(letter.charCodeAt(0) + 127397))
    .join("");
}

cmd({
    pattern: "check",
    desc: "Checks the country calling code and returns the corresponding country name(s) with flag",
    category: "utility",
    filename: __filename
}, async (conn, mek, m, { from, args, reply }) => {
    try {
        let code = args[0];
        if (!code) {
            return reply("❌ Please provide a country code. Example: `.check 254`");
        }

        // Remove any '+' signs from the code
        code = code.replace(/\+/g, '');

        // Fetch all countries using the REST Countries v3.1 API
        const url = "https://restcountries.com/v3.1/all";
        const { data } = await axios.get(url);

        // Filter countries whose callingCodes include the given code
        const matchingCountries = data.filter(country =>
            country.idd?.root && country.idd.suffixes?.some(suffix => (country.idd.root + suffix) === `+${code}`)
        );

        if (matchingCountries.length > 0) {
            const countryNames = matchingCountries
                .map(country => `${getFlagEmoji(country.cca2)} ${country.name.common}`)
                .join("\n");
            reply(`✅ *Country Code*: ${code}\n🌍 *Countries*:\n${countryNames}`);
        } else {
            reply(`❌ No country found for the code ${code}.`);
        }
    } catch (error) {
        console.error(error);
        reply("❌ An error occurred while checking the country code.");
    }
});
