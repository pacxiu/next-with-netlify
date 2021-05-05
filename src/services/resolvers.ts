import { attributes } from 'content/components/links.md';

interface LinkProps {
  title: string;
  link: string;
}

export const resolveLinks = (links: string[]) => {
  return links.map((link) => attributes.links.find((el: LinkProps) => el.link === link));
};

export const resolveUrl = (url: string) => url.split('/public')[1] || url;
