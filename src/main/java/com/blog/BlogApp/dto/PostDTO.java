package com.blog.BlogApp.dto;

import com.blog.BlogApp.model.Post;

public class PostDTO {

    private Long id;
    private String creationTime;
    private String author;
    private String title;
    private String body;

    public PostDTO() {}

    public PostDTO(Post post){
        super();
        this.setId(post.getId());
        this.setCreationTime(post.getCreationTime().toString());
        this.setAuthor(post.getAuthor());
        this.setTitle(post.getTitle());
        this.setBody(post.getBody());
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(String creationTime) {
        this.creationTime = creationTime;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }
}
