import * as cheerio from "cheerio";

export default async function handler(req, res) {
  try {
    const urls = [
      "http://kitabisa.com/listrikuntukjabar",
      "https://kitabisa.com/campaign/listrikuntuksumbar", // Ganti dengan URL kedua
    ];

    // Fetch both URLs in parallel
    const responses = await Promise.all(
      urls.map(async (url) => {
        const response = await fetch(url);
        const htmlString = await response.text();
        const $ = cheerio.load(htmlString);
        const scriptResponse = $("script#__NEXT_DATA__").text();
        const responseParse = JSON.parse(scriptResponse);

        // Return the parsed data
        return responseParse.props.pageProps.dataCampaign;
      })
    );

    // Return as an array of objects
    res.status(200).json({
      success: true,
      data: responses,
    });
  } catch (error) {
    console.error("Error scraping:", error);
    res.status(500).json({ success: false, error: "Failed to scrape the data" });
  }
}
