interface ITournamentProps {
    image: string;
    logo: string;
    title: string;
    time: string;
    labels: string[];
    progress: {
        variant: string;
        value: number;
        slotNumber: number;
        leftNumber: number;
    };
}
declare const CardTournament: ({ image, logo, title, time, labels, progress }: ITournamentProps) => import("react/jsx-runtime").JSX.Element;
export { CardTournament, type ITournamentProps };
