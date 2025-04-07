export interface ExperienceItemProps {
  title: string;
	extra?: string;
  items: {
    subTitle: string;
    body: string;
    meta: {
      first?: string;
      second?: string;
      third?: string;
    };
  }[];
	translate: {
		x: string;
		y: string;
	}
}