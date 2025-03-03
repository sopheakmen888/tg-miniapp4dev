
import BranchCard from '../components/BranchCard';

const Branch = () => {
    return (
        <>

            <div className="space-y-8">
                <div className='text-left'>
                    <h1 className='text-3xl font-bold font-jomhuria'>Branch & Contact</h1>
                    <button className='mt-4 text-xl bg-green-600 text-white w-50 rounded-md'>Workout Plans</button>
                </div>
                <BranchCard
                    branchName="Branch 1"
                    phone="00009494"
                    location="PSE - Pour un Sourire d'Enfant, Village Trea, 402 Ln, 12352"
                    imageSrc="https://i.pinimg.com/736x/f3/50/25/f3502537a9be2db3a49e2a3ccf4ef15f.jpg"
                />
                <BranchCard
                    branchName="Branch 1"
                    phone="00009494"
                    location="PSE - Pour un Sourire d'Enfant, Village Trea, 402 Ln, 12352"
                    imageSrc="https://i.pinimg.com/736x/f3/50/25/f3502537a9be2db3a49e2a3ccf4ef15f.jpg"
                />
                <BranchCard
                    branchName="Branch 1"
                    phone="00009494"
                    location="PSE - Pour un Sourire d'Enfant, Village Trea, 402 Ln, 12352"
                    imageSrc="https://i.pinimg.com/736x/f3/50/25/f3502537a9be2db3a49e2a3ccf4ef15f.jpg"
                />
                <BranchCard
                    branchName="Branch 1"
                    phone="00009494"
                    location="PSE - Pour un Sourire d'Enfant, Village Trea, 402 Ln, 12352"
                    imageSrc="https://i.pinimg.com/736x/f3/50/25/f3502537a9be2db3a49e2a3ccf4ef15f.jpg"
                />
                <BranchCard
                    branchName="Branch 1"
                    phone="00009494"
                    location="PSE - Pour un Sourire d'Enfant, Village Trea, 402 Ln, 12352"
                    imageSrc="https://i.pinimg.com/736x/cd/4b/84/cd4b84208aacbb62b03fe31167b69b6e.jpg"
                />


            </div>
        </>
    );
};

export default Branch;
