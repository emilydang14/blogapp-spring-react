package com.blog.BlogApp.repositories;

import com.blog.BlogApp.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

    Post findPostById(Long Id);
}
