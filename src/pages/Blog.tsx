import { Container } from "@/components/shared/main/Container"
import { SectionTitle } from "@/components/shared/main/SectionTitle"
import { useEffect } from "react"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  author: {
    name: string
    image: string
  }
  image: string
  featured?: boolean
}

export default function Blog() {

  useEffect(() => {
    document.title = "Blog | WindReact"
  }, [])

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of Web Development: What's Next in 2024",
      excerpt: "Explore the latest trends and technologies shaping the future of web development, from AI integration to advanced frameworks.",
      category: "Technology",
      date: "Mar 16, 2024",
      author: {
        name: "John Doe",
        image: "/images/team/1.jpg"
      },
      image: "/images/blog/post1.jpg",
      featured: true
    },
    {
      id: 2,
      title: "10 Tips for Building Better React Applications",
      excerpt: "Learn the best practices and patterns for creating scalable and maintainable React applications.",
      category: "Development",
      date: "Mar 14, 2024",
      author: {
        name: "Jane Smith",
        image: "/images/team/2.png"
      },
      image: "/images/blog/post2.jpg"
    },
    {
      id: 3,
      title: "Mastering Tailwind CSS: Advanced Techniques",
      excerpt: "Deep dive into advanced Tailwind CSS techniques and learn how to create custom designs efficiently.",
      category: "Design",
      date: "Mar 12, 2024",
      author: {
        name: "Mike Johnson",
        image: "/images/team/3.png"
      },
      image: "/images/blog/post3.jpg"
    },
    {
      id: 4,
      title: "The Complete Guide to Modern Web Animation",
      excerpt: "Discover how to create engaging web animations that enhance user experience without sacrificing performance.",
      category: "Design",
      date: "Mar 10, 2024",
      author: {
        name: "Sarah Williams",
        image: "/images/team/4.webp"
      },
      image: "/images/blog/post4.jpg"
    }
  ]

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="max-w-screen-xl mx-auto">
      <Container>
        {/* Hero Section */}
        <div className="text-center">

          <SectionTitle
              preTitle="Blog"
              title="Our Latest Updates and Insights"
              align="center"  
          >
              Stay up to date with the latest news, tutorials, and insights about web development and design.
          </SectionTitle>

        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-20">
            <SectionTitle
              preTitle="Featured Post"
              title="Editor's Pick"
              align="center"
            >
              Don't miss our most important updates and featured content.
            </SectionTitle>

            <div className="mt-12 overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="relative h-64 md:h-full">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                </div>
                <div className="px-8 py-12">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="px-3 py-1 text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/50 rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">{featuredPost.date}</span>
                  </div>
                  <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-4 text-gray-600 dark:text-gray-400">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mt-8">
                    <img
                      src={featuredPost.author.image}
                      alt={featuredPost.author.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{featuredPost.author.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Author</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="pb-20">
          <SectionTitle
            preTitle="Latest Posts"
            title="Recent Articles"
            align="center"
          >
            Read our latest articles and tutorials about web development and design.
          </SectionTitle>

          <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <div key={post.id} className="overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-md">
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="px-3 py-1 text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/50 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <img
                      src={post.author.image}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {post.author.name}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}