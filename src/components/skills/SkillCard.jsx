
const SkillCard = ({ data }) => {
    const { img } = data;

    return (
        <div className="card items-center mx-auto">
            <figure><img className="w-[100px] h-[50px] p-1 object-contain" src={img} alt="" /></figure>
            {/* <div className="card-body">
                <h2 className="card-title">
                    {skill}
                </h2>
            </div> */}
        </div>
    );
};

export default SkillCard;