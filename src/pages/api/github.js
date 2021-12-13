const { Octokit } = require("@octokit/rest");

export default async (req, res) => {
    const octokit = new Octokit({
        auth: process.env.GITHUB_KEY
    });

    const followers = await octokit.request("/users/JayPrates/followers?per_page=100");
    const followerCount = followers.data.length;

    const stars = await octokit.request("/users/JayPrates/repos");
    const starsCount = stars.data.filter(repo => !repo.fork).reduce((acc, item) => {
        return acc + item.stargazers_count;
    }, 0);

    const repos = await octokit.request("/users/JayPrates/repos");
    const starredCount = repos.data.length;

    return res.status(200).json({ stars: starsCount, followers: followerCount, starred: starredCount });
}