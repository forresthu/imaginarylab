import Header from '@/components/shared/header'
import TransformationForm from '@/components/shared/TransformationForm';
import { transformationTypes } from '@/constants'
import { getUserById } from '@/lib/actions/user.actions';

import { auth } from '@clerk/nextjs/server'


const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {
    const { userId }: { userId: string | null } = auth()

    const transformation = transformationTypes[type];


    console.log(userId)
    const user = await getUserById(userId!);
    console.log(user)
    return (
        <>
            <Header
                title={transformation.title}
                subtitle={transformation.subTitle}
            />

            <section className="mt-10">
                <TransformationForm
                    action="Add"
                    userId={user._id}
                    type={transformation.type as TransformationTypeKey}
                    creditBalance={user.creditBalance}
                />
            </section>
        </>
    )
}

export default AddTransformationTypePage