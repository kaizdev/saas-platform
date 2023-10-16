interface PageProps {
    params: {
        fileid: string;
    };
}

const Page = ({ params }: PageProps) => {
    // retrieve the file id
    const { fileid } = params;

    return <div>{fileid}</div>;
};
export default Page;
