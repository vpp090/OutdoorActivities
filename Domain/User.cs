namespace Domain
{
    public class User
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }

        public Profile Profile { get; set; }
        public DateTime DateCreated { get; set; }
    }
}