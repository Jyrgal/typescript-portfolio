import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Projects = memo(() => {
  const [categoryFilters, setCategoryFilters] = useState<string[]>([]);
  const [subtopicFilters, setSubtopicFilters] = useState<string[]>([]);
  const navigate = useNavigate();
  return <div className='md:px-24'>Hi</div>;
});

export default Projects;
