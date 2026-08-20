import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import FlashCards from './FlashCards';
import GermanyMap from './GermanyMap';
import GermanSpeakingGame from './GermanSpeakingGame';
import WoBistDuLesson from './WoBistDuLesson';
import AlterMannLesson from './AlterMannLesson';
import AmerikaLesson from './AmerikaLesson';
import AmourLesson from './AmourLesson';
import AuslanderLesson from './AuslanderLesson';
import BenzinLesson from './BenzinLesson';
import BTrackLesson from './BTrackLesson';
import DalaiLamaLesson from './DalaiLamaLesson';
import DeutschlandLesson from './DeutschlandLesson';
import DiamantLesson from './DiamantLesson';
import EineLesson from './EineLesson';
import EinLiedLesson from './EinLiedLesson';
import EngelLesson from './EngelLesson';
import FeuerUndWasserLesson from './FeuerUndWasserLesson';
import FruhlingInParisLesson from './FruhlingInParisLesson';
import GeyersSchwarzerHaufenLesson from './GeyersSchwarzerHaufenLesson';
import HaifischLesson from './HaifischLesson';
import HallomannLesson from './HallomannLesson';
import IchTuDirWehLesson from './IchTuDirWehLesson';
import KeineLustLesson from './KeineLustLesson';
import LichterlohLesson from './LichterlohLesson';
import LiebeIstFurAlleDaLesson from './LiebeIstFurAlleDaLesson';
import LosLesson from './LosLesson';
import MannGegenMannLesson from './MannGegenMannLesson';
import MehrLesson from './MehrLesson';
import MeinTeilLesson from './MeinTeilLesson';
import MoskauLesson from './MoskauLesson';
import NebelLesson from './NebelLesson';
import OhneDichLesson from './OhneDichLesson';
import PuppeLesson from './PuppeLesson';
import PussyLesson from './PussyLesson';
import RadioLesson from './RadioLesson';
import Ramm4Lesson from './Ramm4Lesson';
import ReiseReiseLesson from './ReiseReiseLesson';
import RosenrotLesson from './RosenrotLesson';
import RoterSandLesson from './RoterSandLesson';
import SeemannLesson from './SeemannLesson';
import SexLesson from './SexLesson';
import SpielMitMirLesson from './SpielMitMirLesson';
import SpringLesson from './SpringLesson';
import StirNichtLesson from './StirNichtLesson';
import TattooLesson from './TattooLesson';
import TeQuieroPutaLesson from './TeQuieroPutaLesson';
import WaidmannsHeilLesson from './WaidmannsHeilLesson';
import WeitWegLesson from './WeitWegLesson';
import WienerBlutLesson from './WienerBlutLesson';
import WoWillstDuHinLesson from './WoWillstDuHinLesson';
import ZeigDichLesson from './ZeigDichLesson';
import ZerstorenLesson from './ZerstorenLesson';
import AdieuLesson from './AdieuLesson';
import AngstLesson from './AngstLesson';
import ArmeeDerTristenLesson from './ArmeeDerTristenLesson';
import DickeTittenLesson from './DickeTittenLesson';
import GiftigLesson from './GiftigLesson';
import LugenLesson from './LugenLesson';
import MeineTranenLesson from './MeineTranenLesson';
import OkLesson from './OkLesson';
import SchwarzLesson from './SchwarzLesson';
import ZeitLesson from './ZeitLesson';
import ZickZackLesson from './ZickZackLesson';
import WFragenLesson from './WFragenLesson';
import GermanCompoundWords from './GermanCompoundWords';
import GermanVerbsPage from './GermanVerbsPage';
import GermanNumbersPage from './GermanNumbersPage';
import GermanSongsLanding from './GermanSongsLanding';
import GermanAdjectivesPage from './GermanAdjectivesPage';
import GermanAdjectiveCardsPage from './GermanAdjectiveCardsPage';
import GermanPronounsPage from './GermanPronounsPage';
import GermanNounsPage from './GermanNounsPage';
import GermanLanding from './GermanLanding';

const GermanSection = () => {
  const navigate = useNavigate();
  const goSection = () => navigate('/');
  const goSongs = () => navigate('/songs');

  return (
    <Routes>
      <Route index element={<GermanLanding />} />
      <Route path="flashcards" element={<FlashCards quizId="german-vocabulary" onHome={goSection} />} />
      <Route path="a1-exam" element={<FlashCards quizId="a1-exam-practice" onHome={goSection} />} />
      <Route path="fes-iztacala-2" element={<FlashCards quizId="fes-iztacala-level-2" onHome={goSection} />} />
      <Route path="map" element={<GermanyMap onHome={goSection} />} />
      <Route path="speaking" element={<GermanSpeakingGame onHome={goSection} />} />
      <Route path="w-fragen" element={<WFragenLesson onHome={goSection} />} />
      <Route path="compound-words" element={<GermanCompoundWords onHome={goSection} />} />
      <Route path="verben" element={<GermanVerbsPage onHome={goSection} />} />
      <Route path="adjektive" element={<GermanAdjectivesPage onHome={goSection} />} />
      <Route path="adjektive-karten" element={<GermanAdjectiveCardsPage onHome={goSection} />} />
      <Route path="pronomen" element={<GermanPronounsPage onHome={goSection} />} />
      <Route path="nomen" element={<GermanNounsPage onHome={goSection} />} />
      <Route path="numbers" element={<GermanNumbersPage onHome={goSection} />} />

      {/* Herzeleid (1995) */}
      <Route path="seemann" element={<SeemannLesson onHome={goSongs} />} />

      {/* Sehnsucht (1997) */}
      <Route path="engel" element={<EngelLesson onHome={goSongs} />} />
      <Route path="spiel-mit-mir" element={<SpielMitMirLesson onHome={goSongs} />} />
      <Route path="alter-mann" element={<AlterMannLesson onHome={goSongs} />} />

      {/* Mutter (2001) */}
      <Route path="feuer-und-wasser" element={<FeuerUndWasserLesson onHome={goSongs} />} />
      <Route path="nebel" element={<NebelLesson onHome={goSongs} />} />

      {/* Reise, Reise (2004) */}
      <Route path="reise-reise" element={<ReiseReiseLesson onHome={goSongs} />} />
      <Route path="mein-teil" element={<MeinTeilLesson onHome={goSongs} />} />
      <Route path="dalai-lama" element={<DalaiLamaLesson onHome={goSongs} />} />
      <Route path="los" element={<LosLesson onHome={goSongs} />} />
      <Route path="amerika" element={<AmerikaLesson onHome={goSongs} />} />
      <Route path="moskau" element={<MoskauLesson onHome={goSongs} />} />
      <Route path="amour" element={<AmourLesson onHome={goSongs} />} />
      <Route path="ohne-dich" element={<OhneDichLesson onHome={goSongs} />} />
      <Route path="lichterloh" element={<LichterlohLesson onHome={goSongs} />} />

      {/* Rosenrot (2005) */}
      <Route path="benzin" element={<BenzinLesson onHome={goSongs} />} />
      <Route path="mann-gegen-mann" element={<MannGegenMannLesson onHome={goSongs} />} />
      <Route path="stirb-nicht" element={<StirNichtLesson onHome={goSongs} />} />
      <Route path="zerstoren" element={<ZerstorenLesson onHome={goSongs} />} />
      <Route path="eine" element={<EineLesson onHome={goSongs} />} />
      <Route path="wo-willst-du-hin" element={<WoWillstDuHinLesson onHome={goSongs} />} />
      <Route path="spring" element={<SpringLesson onHome={goSongs} />} />
      <Route path="wo-bist-du" element={<WoBistDuLesson onHome={goSongs} />} />
      <Route path="te-quiero-puta" element={<TeQuieroPutaLesson onHome={goSongs} />} />
      <Route path="rosenrot" element={<RosenrotLesson onHome={goSongs} />} />
      <Route path="ein-lied" element={<EinLiedLesson onHome={goSongs} />} />

      {/* Liebe ist für alle da (2009) */}
      <Route path="ramm-4" element={<Ramm4Lesson onHome={goSongs} />} />
      <Route path="ich-tu-dir-weh" element={<IchTuDirWehLesson onHome={goSongs} />} />
      <Route path="waidmanns-heil" element={<WaidmannsHeilLesson onHome={goSongs} />} />
      <Route path="haifisch" element={<HaifischLesson onHome={goSongs} />} />
      <Route path="b-track" element={<BTrackLesson onHome={goSongs} />} />
      <Route path="fruhling-in-paris" element={<FruhlingInParisLesson onHome={goSongs} />} />
      <Route path="wiener-blut" element={<WienerBlutLesson onHome={goSongs} />} />
      <Route path="pussy" element={<PussyLesson onHome={goSongs} />} />
      <Route path="liebe-ist-fur-alle-da" element={<LiebeIstFurAlleDaLesson onHome={goSongs} />} />
      <Route path="mehr" element={<MehrLesson onHome={goSongs} />} />
      <Route path="roter-sand" element={<RoterSandLesson onHome={goSongs} />} />

      {/* Rammstein (2019) */}
      <Route path="deutschland" element={<DeutschlandLesson onHome={goSongs} />} />
      <Route path="radio" element={<RadioLesson onHome={goSongs} />} />
      <Route path="zeig-dich" element={<ZeigDichLesson onHome={goSongs} />} />
      <Route path="auslander" element={<AuslanderLesson onHome={goSongs} />} />
      <Route path="sex" element={<SexLesson onHome={goSongs} />} />
      <Route path="diamant" element={<DiamantLesson onHome={goSongs} />} />
      <Route path="weit-weg" element={<WeitWegLesson onHome={goSongs} />} />
      <Route path="tattoo" element={<TattooLesson onHome={goSongs} />} />
      <Route path="puppe" element={<PuppeLesson onHome={goSongs} />} />
      <Route path="hallomann" element={<HallomannLesson onHome={goSongs} />} />

      {/* Zeit (2022) — already handled above via tattoo route */}

      {/* Zeit (2022) */}
      <Route path="armee-der-tristen" element={<ArmeeDerTristenLesson onHome={goSongs} />} />
      <Route path="zeit" element={<ZeitLesson onHome={goSongs} />} />
      <Route path="schwarz" element={<SchwarzLesson onHome={goSongs} />} />
      <Route path="giftig" element={<GiftigLesson onHome={goSongs} />} />
      <Route path="zick-zack" element={<ZickZackLesson onHome={goSongs} />} />
      <Route path="ok" element={<OkLesson onHome={goSongs} />} />
      <Route path="meine-tranen" element={<MeineTranenLesson onHome={goSongs} />} />
      <Route path="angst" element={<AngstLesson onHome={goSongs} />} />
      <Route path="lugen" element={<LugenLesson onHome={goSongs} />} />
      <Route path="dicke-titten" element={<DickeTittenLesson onHome={goSongs} />} />
      <Route path="adieu" element={<AdieuLesson onHome={goSongs} />} />

      {/* Volkslied */}
      <Route path="keine-lust" element={<KeineLustLesson onHome={goSongs} />} />
      <Route path="geyers-schwarzer-haufen" element={<GeyersSchwarzerHaufenLesson onHome={goSongs} />} />

      <Route path="songs" element={<GermanSongsLanding onHome={goSection} />} />
    </Routes>
  );
};

export default GermanSection;
