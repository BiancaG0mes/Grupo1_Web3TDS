package com.enem.analyze.enemanalyze.repository;

import com.enem.analyze.enemanalyze.models.DesempenhoEnem;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DesempenhoEnemRepository extends MongoRepository<DesempenhoEnem, String> {
}


