import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent {
  // blogs
  blogsData = {
    blogs: [
      {
        blogId: 1,
        title: 'The Importance of Healthy Living',
        content:
          'Healthy living is essential for maintaining overall well-being. It includes regular exercise, balanced nutrition, and mental health awareness.',
        author: 'Dr. John Doe',
        published: true,
        date: '2024-12-10',
        likes: 45,
        comments: [
          {
            commentId: 1,
            userName: 'Alice',
            comment: 'Great article! I need to start exercising more.',
          },
          {
            commentId: 2,
            userName: 'Bob',
            comment:
              'I completely agree with the importance of mental health. Thanks for sharing!',
          },
        ],
      },
      {
        blogId: 2,
        title: 'Top 5 Tips for Better Sleep',
        content:
          "Getting a good night's sleep is crucial for health. In this blog, we cover some tips to improve your sleep quality.",
        author: 'Dr. Jane Smith',
        published: false,
        date: '2024-12-11',
        likes: 32,
        comments: [
          {
            commentId: 3,
            userName: 'Charlie',
            comment: "I need this! I've been struggling with sleep lately.",
          },
        ],
      },
      {
        blogId: 3,
        title: 'Nutrition for Beginners',
        content:
          'Nutrition is a key part of a healthy lifestyle. In this post, we break down the basics of healthy eating.',
        author: 'Dr. John Doe',
        published: true,
        date: '2024-12-12',
        likes: 58,
        comments: [],
      },
    ],
  };

  showCommentsFor: number | null = null;
  newComment: string = '';

  // publish status
  togglePublish(blogId: number) {
    const blog = this.blogsData.blogs.find((b) => b.blogId === blogId);
    if (blog) {
      blog.published = !blog.published;
    }
  }

  // Increase likes count
  likePost(blogId: number) {
    const blog = this.blogsData.blogs.find((b) => b.blogId === blogId);
    if (blog) {
      blog.likes += 1;
    }
  }

  // View comments
  viewComments(blogId: number) {
    this.showCommentsFor = this.showCommentsFor === blogId ? null : blogId;
  }

  // new comment
  addComment(blogId: number) {
    const blog = this.blogsData.blogs.find((b) => b.blogId === blogId);
    if (blog && this.newComment.trim()) {
      blog.comments.push({
        commentId: blog.comments.length + 1,
        userName: 'Admin', // or dynamically use logged in user's name
        comment: this.newComment,
      });
      this.newComment = ''; // Clear the input field after adding a comment
    }
  }
}
