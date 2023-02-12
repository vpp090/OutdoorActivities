namespace Domain
{
    public class Offer
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public User User { get; set; }
        public DateTime DateCreated { get; set; }

        public string Description { get; set; }

    }
}