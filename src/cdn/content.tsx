import { ReactNode, useState, createContext, useContext, useEffect } from 'react';

const API_YEK = '';
const BASE_URL = 'https://cdn.contentful.com';
const SPACES_URL = `${BASE_URL}/spaces/zhzbojak0hm4/environments/master/entries/5hXfl9DIH1cubCiTiuBB5T?access_token=1rff-${API_YEK}-uy_SvwPfY`;

interface Fields {
  aboutTitle: string;
  aboutDescription: string;
  whatWeDoTitle: string;
  whatWeDoDescription: string;
  infoBlurb: string;
  activityTitle: string;
  activityDescription: string;
  moreInfoTitle: string;
  moreInfoDescription: string;
}

interface Data {
  fields: Fields;
}

const FETCH_OPTIONS = { method: 'GET' };
const getData = async () => {
  const data = await fetch(SPACES_URL, FETCH_OPTIONS);
  const json: Data = await data.json();

  console.log(json);
  return json.fields;
};

const DataContext = createContext<Fields | null>(null);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {
  const [value, setValue] = useState<Fields | null>(null);

  useEffect(() => {
    getData().then(setValue);
  }, []);

  return <DataContext.Provider value={value}>{value && children}</DataContext.Provider>;
};

export const useDataContext = () => useContext(DataContext);
