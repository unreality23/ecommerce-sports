import React from "react";
import BannerSlider from "../../organisms/BannerSlider/BannerSlider";
import CenteredContainer from "../../atoms/CenteredContainer/CenteredContainer";
import SiteHeader from "../../molecules/SiteHeader/SiteHeader";
import CategoryPage from "../CategoryPage/CategoryPage";
import FormGroup from "../../atoms/Form/skeleton/FormGroup";
import RadioInput from "../../atoms/Form/skeleton/RadioInput";
import SelectInput from "../../atoms/Form/skeleton/SelectInput";
import TextInput from "../../atoms/Form/skeleton/TextInput";
import TextField from '../../atoms/TextField/TextField';
const Home = () => {
  const slides = [
    {
      image: "/banner-images/banner-default.jpg",
      caption: "Slide 1",
    },
    {
      image: "/banner-images/optica_pattern_05.png",
      caption: "Slide 2",
    },
    {
      image: "/banner-images/optica_pattern_11.png",
      caption: "Slide 3",
    },
  ];

  return (
    <div>
      {/* Your Home page content */}
      <BannerSlider slides={slides} />
      <CenteredContainer>
        <h1>
          Socially and environmentally progressive outdoor footwear that helps
          you #BeOutside.
        </h1>
      </CenteredContainer>
      <SiteHeader />
      <CenteredContainer>
        <CategoryPage />
      </CenteredContainer>
      <FormGroup>
        <RadioInput />
        <TextField label="forename" name="forename" isItImportant="true" />
      </FormGroup>
    </div>
  );
};

export default Home;
