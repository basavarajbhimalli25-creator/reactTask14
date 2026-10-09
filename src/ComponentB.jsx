import { useDispatch, useSelector } from "react-redux";
import { clearUsers } from "./redux/userSlice";

function ComponentB() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  return (
    <div className="data-section">
      <div className="section-header">
        <div>
          <h2>Registered Users</h2>
          <p className="subtitle">
            Data retrieved from Redux Store
          </p>
        </div>

        {users.length > 0 && (
          <button
            className="clear-btn"
            onClick={() => dispatch(clearUsers())}
          >
            Clear All
          </button>
        )}
      </div>

      {users.length === 0 ? (
        <div className="empty-state">
          <h3>No users yet</h3>
          <p>Submit the form to display user details here.</p>
        </div>
      ) : (
        <div className="user-grid">
          {users.map((user) => (
            <div className="user-card" key={user.id}>
              <div className="avatar">
                {user.name.charAt(0).toUpperCase()}
              </div>

              <h3>{user.name}</h3>

              <span className="role-badge">
                {user.role}
              </span>

              <div className="user-details">
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <p>
                  <strong>Phone:</strong> {user.phone}
                </p>
                <p>
                  <strong>City:</strong> {user.city}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ComponentB;