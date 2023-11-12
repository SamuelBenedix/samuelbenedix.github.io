
export interface ContactProps {
 id?: number | string;
 first_name: string;
 last_name: string;
 isFav?: boolean;
 created_at?: string;
}

export interface ContactsProps {
 id?: number | string;
 first_name: string;
 last_name: string;
 isFav?: boolean;
 created_at?: string;
 phones: {
  number: string
 }[],
};


export type ContactContextType = {
 data: ContactsProps[];
 localStorageData?: { id: string }
 setFav: (ContactsProps) => void;
 setNewData: (ContactProps) => void;
 removeData: (id: number) => void
};
