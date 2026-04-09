import { PdfDownloadButton } from "@/components/PdfDownloadButton";
import {
  Page01Cover,
  Page02Identity,
  Page03Problem,
  Page04Approach,
  Page05HowToFollow,
  Page06TrainingFormat,
  Page07WeeklyStructure,
  Page08Day1Upper,
  Page09Day2Lower,
  Page10Day3Core,
  Page11Day4Functional,
  Page12Day5FullBody,
  Page13Progression,
  Page14Lifestyle,
  Page15SelfCheck,
  Page16Community,
  Page17Final,
} from "./program-pages";

export function ProgramViewer() {
  return (
    <div className="bg-muted/30 py-8 px-4">
      {/* Mobile download prompt */}
      <div className="flex items-center justify-center mb-6 md:hidden">
        <PdfDownloadButton size="lg" className="w-full max-w-sm" />
      </div>

      {/* Pages container — centers the A4 sheets */}
      <div
        className="flex flex-col items-center gap-8"
        data-ocid="program-pages"
      >
        <Page01Cover />
        <Page02Identity />
        <Page03Problem />
        <Page04Approach />
        <Page05HowToFollow />
        <Page06TrainingFormat />
        <Page07WeeklyStructure />
        <Page08Day1Upper />
        <Page09Day2Lower />
        <Page10Day3Core />
        <Page11Day4Functional />
        <Page12Day5FullBody />
        <Page13Progression />
        <Page14Lifestyle />
        <Page15SelfCheck />
        <Page16Community />
        <Page17Final />
      </div>
    </div>
  );
}
