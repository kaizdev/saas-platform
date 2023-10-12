import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";

const Page = async () => {
    // sync the user and make sure it is in the db
    const router = useRouter();

    const searchParams = useSearchParams();
    const origin = searchParams.get("origin");

    const apiResponse = await fetch("/api/whatever");

    const { data, isLoading } = trpc.authCallback.useQuery(undefined, {
        onSuccess: ({ success }) => {
            if (success) {
                // user is synced to db
                router.push(origin ? `/${origin}` : "/dashboard");
            }
        },
    });

    return <div>Page</div>;
};
export default Page;
