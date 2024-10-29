import { KeenIcon } from '@/components';

const ResetPasswordChange = () => {
  return (
    <div className="card max-w-[370px] w-full">
      <form className="card-body flex flex-col gap-5 p-10">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900">Reset Password</h3>
          <span className="text-2sm text-gray-700">Enter your new password</span>
        </div>

        <div className="flex flex-col gap-1">
          <label className="form-label text-gray-900">New Password</label>

          <label className="input">
            <input
              placeholder="Enter a new password"
              type="password"
              name="user_new_password"
              value=""
              readOnly
            />
            <div className="btn btn-icon">
              <KeenIcon icon="eye" className="text-gray-500 toggle-password-active:hidden" />
              <KeenIcon
                icon="eye-slash"
                className="text-gray-500 hidden toggle-password-active:block"
              />
            </div>
          </label>
        </div>

        <div className="flex flex-col gap-1">
          <label className="form-label font-normal text-gray-900">Confirm New Password</label>

          <label className="input">
            <input
              placeholder="Re-enter a new Password"
              type="password"
              name="user_confirm_password"
              value=""
              readOnly
            />
            <div className="btn btn-icon">
              <KeenIcon icon="eye" className="text-gray-500 toggle-password-active:hidden" />
              <KeenIcon
                icon="eye-slash"
                className="text-gray-500 hidden toggle-password-active:block"
              />
            </div>
          </label>
        </div>

        <button className="btn btn-primary flex justify-center grow">Submit</button>
      </form>
    </div>
  );
};

export { ResetPasswordChange };
