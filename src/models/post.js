export default class Post {
  constructor(node) {
    const { id, html, excerpt, frontmatter, fields, timeToRead } = node;
    const { slug } = fields;
    const { emoji, categories, title, author, date, tags } = frontmatter;

    this.id = id;
    this.excerpt = excerpt;
    this.emoji = emoji;
    this.html = html;
    this.slug = slug;
    this.title = title;
    this.author = author;
    this.date = date;
    this.categories = categories.split(' ');
    this.timeToRead = timeToRead;
    this.tags = tags && tags.split(' ');
  }
}
