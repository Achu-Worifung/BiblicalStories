"use client";
export default function SubmitButton() {
  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => {
          const modal = document.getElementById(
            "my_modal_2"
          ) as HTMLDialogElement;
          if (modal) {
            modal.showModal();
          }
        }}
      >
        Submit
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
