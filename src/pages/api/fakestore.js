const { Octokit } = require("@octokit/rest");

export default async (req, res) => {
    const octokit = new Octokit({
    });

    const response = await octokit.request("https://fakestoreapi.com/products");
    console.log(response.data)

    

    return res.status(200).json(response.data);
}