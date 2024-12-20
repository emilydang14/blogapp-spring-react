package com.blog.BlogApp.resource;

import com.blog.BlogApp.dto.GenericAPIResponseDTO;
import com.blog.BlogApp.dto.PostDTO;
import com.blog.BlogApp.service.api.PostService;
import jakarta.annotation.Resource;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping(value = "/resource/post")
@CrossOrigin
public class PostApiResource {
    @Resource
    PostService postService;

    @RequestMapping(value = "",method = RequestMethod.GET)
    @ResponseBody
    public List<PostDTO> getAll() {
        return postService.findAll();
    }

    @RequestMapping(value = "",method = RequestMethod.POST)
    @ResponseBody
    public PostDTO createPost(@RequestBody @NotNull @Valid PostDTO postDTO) {
        return postService.save(postDTO);
    }

    @RequestMapping(value = "/{postId}",method = RequestMethod.GET)
    @ResponseBody
    public PostDTO getPost(@PathVariable("postId") @NotNull Long postId) {
        return postService.findPostById(postId);
    }

    @RequestMapping(value = "",method = RequestMethod.PUT)
    @ResponseBody
    public PostDTO updatePost(@RequestBody @NotNull @Valid PostDTO postDTO) {
        return postService.save(postDTO);
    }

    @RequestMapping(value = "/{postId}",method = RequestMethod.DELETE)
    @ResponseBody
    public GenericAPIResponseDTO deletePost(@PathVariable("postId") @NotNull Long postId) {
        return postService.delete(postId);
    }
}
