import * as cheerio from "cheerio";

export default async function handler(req, res) {
  try {
    const response = await fetch(`http://kitabisa.com/listrikuntukjabar`);
    const htmlString = await response.text();
    const $ = cheerio.load(htmlString);
    const scriptResponse = $("script#__NEXT_DATA__").text();
    const responseParse = JSON.parse(scriptResponse);
    res
      .status(200)
      .json({
        success: true,
        message: { ...responseParse.props.pageProps.dataCampaign },
      });
  } catch (error) {
    console.error("Error scraping:", error);
    res
      .status(500)
      .json({ success: false, error: "Failed to scrape the data" });
  }
}
