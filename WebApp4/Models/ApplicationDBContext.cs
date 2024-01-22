using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace WebApp4.Models
{
    public class ApplicationDBContext : IdentityDbContext<MyUser>
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) :
            base(options)
        { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            // DO NOT REMOVE THIS LINE. If you do, your context won't work as expected.
            base.OnModelCreating(builder);

            // TODO: Add your own fluent mappings
            builder.HasDefaultContainer("user");

            builder.Entity<IdentityRole>()
                .Property(b => b.ConcurrencyStamp)
                .IsETagConcurrency();
            builder.Entity<MyUser>() // ApplicationUser mean the Identity user 'ApplicationUser : IdentityUser'
                .Property(b => b.ConcurrencyStamp)
                .IsETagConcurrency();
        }
    }
}
