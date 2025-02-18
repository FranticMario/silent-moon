import { useEffect, useState } from 'react';

import { fetchMeditation, fetchYoga } from '../../api/fetchContent';
import { ArticleList } from '../../components/articleList/ArticleList';
import { PreviewCardContainer } from '../../components/previewCardContainer/PreviewCardContainer';
import { Header } from '../../components/header/Header';
import { Search } from '../../components/search/Search';
import { Footer } from '../../components/footer/Footer';
import { useUserContext } from '../../context/UserProvider';

export interface Yoga {
  id: number;
  title: string;
  description: string;
  video_url: string;
  image_url?: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  category_id: number;
  created_at: string;
}

export interface Meditation {
  id: number;
  title: string;
  description: string;
  image_url: string;
  video_url?: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  category_id: number;
  created_at: string;
}

export const Home = () => {
  const [recomendedListYoga, setRecomendedListYoga] = useState<Yoga[]>([]);
  const [recomendedListMeditation, setRecomendedListMeditation] = useState<Meditation[]>([]);
  const { user } = useUserContext();

  useEffect(() => {
    const fetchData = async () => {
      const yogaData = await fetchYoga();
      const meditationData = await fetchMeditation();
      setRecomendedListYoga(yogaData || []); // Falls keine Daten, leeres Array setzen
      setRecomendedListMeditation(meditationData || []); // Falls keine Daten, leeres Array setzen
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="px-5">
        <Header />
        <h2 className="text-2xl font-black text-[#4A503D] mb-3.5 mt-12">
          Good morning {user?.user_metadata?.first_name}
        </h2>
        <p className="text-[16px] font-semibold text-[#A1A4B2] mb-5">We hope you have a good day</p>
        <div className="preview__container flex gap-5 mb-14">
          <PreviewCardContainer />
        </div>
        <Search />
        <ArticleList yoga={recomendedListYoga} meditation={recomendedListMeditation} />
      </div>
      <Footer />
    </>
  );
};
