// route segment config - useful if not using fetch or for better visibility
// export const revalidate = 60 // revalidate this page every 60 seconds


interface Post {
  title: string;
  slug: string;
  content: string;
}

// good for blog posts that don't change often
export async function generateStaticParams() {
  const posts: Post[] = await fetch('http://localhost:3000/api/content', { next: {revalidate: 60} }).then(
    (res) => res.json()
  );

  return posts.map((post) => ({
    slug: post.slug,
  }));

}


interface Props {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: Props) {

  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
    (res) => res.json()
  );
  const post = posts.find((post) => post.slug === params.slug)!;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
