package com.persona.Backend.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.persona.Backend.IRepository.IBaseRepository;
import com.persona.Backend.IService.IBaseService;
import com.persona.Backend.Utils.GlobalConstants;

@Service
public abstract class BaseService<T> implements IBaseService<T> {
	@Autowired
	private IBaseRepository<T, Long> repository;

	@Override
	public List<T> all() throws Exception {
		return repository.findAll();
	}

	@Override
	public Optional<T> findById(Long id) throws Exception {
		return repository.findById(id);
	}

	@Override
	public T save(T instanceEntity) throws Exception {
		return repository.save(instanceEntity);
	}

	@Override
	public void update(Long id, T instanceEntity) throws Exception {
		Optional<T> optionalP = this.repository.findById(id);
		
		if (optionalP.isEmpty()) {
			throw new Exception("No se encontró registro");
		}
		T objetoToUpdate = optionalP.get();
		BeanUtils.copyProperties(instanceEntity, objetoToUpdate,
				GlobalConstants.EXCLUDED_FIELDS.toArray(new String[0]));
		this.repository.save(objetoToUpdate);
	}

	@Override
	public void delete(Long id) throws Exception {
		repository.deleteById(id);
		
	}

}
