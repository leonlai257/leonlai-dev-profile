import { useRouter } from 'next/router';

const Slug = () => {
    const router = useRouter();
    if (router) {
        router.push('/');
    }
};

export default Slug;
