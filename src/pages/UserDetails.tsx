import { useUserContext } from "../context/UserContext";

const UserDetails = () => {
  const { state } = useUserContext();
  console.log(state.userType);

  return (
    <div>
      {state.userType !== null && (
        <p className="text-center text-2xl text-blue-500 capitalize">
          {state.userType.admin ||
            state.userType.buyer ||
            state.userType.seller}
        </p>
      )}
    </div>
  );
};

export default UserDetails;
