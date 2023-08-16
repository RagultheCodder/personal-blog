interface CrumbsInterface {
  child1?: string;
  child2?: string;
  child3?: string;
}

const BreadCrumbs = (props: CrumbsInterface) => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item text-primary">Dashboard</li>
          <li className="breadcrumb-item">{props.child1}</li>
          {props.child2 && <li className="breadcrumb-item"> {props.child2}</li>}
          {props.child3 && (
            <li className="breadcrumb-item active" aria-current="page">
              {props.child3}
            </li>
          )}
        </ol>
      </nav>
    </>
  );
};

export default BreadCrumbs;
