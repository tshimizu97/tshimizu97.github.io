import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import remark from 'remark'
import html from 'remark-html'

const projectsDirectory = path.join(process.cwd(), 'pages/projects')

export async function getPortfolioData() {
  // Get file names under /projects
  const fileNames = fs.readdirSync(projectsDirectory)
  const portfolioData = await Promise.all(fileNames.map(async fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // Combine the data with the id
    return {
      id,
      contentHtml,
      ...matterResult.data
    }
  }))
  console.log(portfolioData[0])
  // Sort projects by date
  return portfolioData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}
