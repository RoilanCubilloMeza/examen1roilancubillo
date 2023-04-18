import { useEffect, useState } from 'react';

interface GithubProviderProps {
  repository: string;
}

export const GithubProvider: React.FC<GithubProviderProps> = ({ repository }) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`https://github.com/RoilanCubilloMeza?tab=repositories${repository}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [repository]);

  return <>{(data)}</>;
};