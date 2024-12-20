package com.blog.BlogApp.service.impl;

import com.blog.BlogApp.dto.GenericAPIResponseDTO;
import com.blog.BlogApp.dto.PostDTO;
import com.blog.BlogApp.exception.RestAPIException;
import com.blog.BlogApp.model.Post;
import com.blog.BlogApp.repositories.PostRepository;
import com.blog.BlogApp.service.api.PostService;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService {

    @Resource
    private PostRepository postRepository;

    @Override
    public PostDTO findPostById(Long id) {
        Post post = postRepository.findPostById(id);

        if (Objects.isNull(post)) {
            throw new RestAPIException("Post not found with id: " + id);
        }

        return new PostDTO(post);
    }

    @Override
    public List<PostDTO> findAll() {
        return postRepository.findAll()
                .stream()
                .map(PostDTO::new)
                .collect(Collectors.toList());
    }

    @Override
    public PostDTO save(PostDTO dto) {
        Post post = new Post();
        if (!Objects.isNull(dto.getId())) {
            post = postRepository.findPostById(dto.getId());
        }

        post.setAuthor(dto.getAuthor());
        post.setCreationTime(LocalDateTime.parse(dto.getCreationTime()));
        post.setModificationTime(LocalDateTime.now());
        post.setTitle(dto.getTitle());
        post.setBody(dto.getBody());

        post = postRepository.save(post);
        return new PostDTO(post);
    }

    @Override
    public GenericAPIResponseDTO delete(Long id) {
        Post post = postRepository.findPostById(id);
        if (Objects.isNull(post)) {
            throw new RestAPIException("Post not found with id: " + id);
        }

        post.setDeleted(true);
        postRepository.save(post);

        return GenericAPIResponseDTO.createSuccessfulResponse();

    }
}
