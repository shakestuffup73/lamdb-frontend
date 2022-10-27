import VetRecordCard from "../../components/VetRecordCard/VetRecordCard";

const PetRecords = ({ vets }) => {
  return ( 
    vets?.length &&
    <main>
      <article>
        <header>
          <h1>This is the Pet Records Page!</h1>
          {vets?.map(vet => 
            <div key={vet._id}>
              <VetRecordCard vet={vet}/>
            </div>
          )}
        </header>
      </article>
    </main>
  );
}

export default PetRecords;