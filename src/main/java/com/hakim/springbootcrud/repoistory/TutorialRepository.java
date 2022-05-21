package com.hakim.springbootcrud.repoistory;

import java.util.List;
import com.hakim.springbootcrud.model.Tutorial;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

//@Repository
public interface TutorialRepository extends JpaRepository<Tutorial, Long> {
    List<Tutorial> findByPublished(boolean published);
    List<Tutorial> findByTitleContaining(String title);
}

/*
@Repository Annotation is a specialization of @Component annotation which is used to indicate that
the class provides the mechanism for storage, retrieval, update, delete and search operation on objects
Now we can use JpaRepository’s methods: save(), findOne(), findById(), findAll(), count(), delete(),
deleteById()… without implementing these methods.
We also define custom finder methods:
– findByPublished(): returns all Tutorials with published having value as input published.
– findByTitleContaining(): returns all Tutorials which title contains input title.
The implementation is plugged in by Spring Data JPA automatically.
 */