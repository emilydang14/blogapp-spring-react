package com.blog.BlogApp.service.api;

import com.blog.BlogApp.dto.GenericAPIResponseDTO;
import com.blog.BlogApp.dto.PostDTO;
import com.blog.BlogApp.model.Post;

import java.util.List;
import java.util.Optional;


public interface PostService {

    PostDTO findPostById(Long Id);

    List<PostDTO> findAll();

    PostDTO save(PostDTO postDTO);

    GenericAPIResponseDTO delete(Long postId);

}
