const EmptyStateComponent = () => {
  return (
    <div className="container empty-state my-3">
      <div className="row justify-content-center">
        <div className="col-lg-4 col-12 p-0 d-flex justify-content-center align-items-center flex-column gap-3">
          <img src="/empty.png" className="img-fluid" />
          <div className="d-flex justify-content-center align-items-center flex-column gap-3">
            <h3>Kata Kunci Tidak Ditemukan</h3>
            <span>Silakan cari dengan kata kunci lain</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyStateComponent;
