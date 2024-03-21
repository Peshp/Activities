using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Data.Migrations
{
    /// <inheritdoc />
    public partial class FillTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Activities",
                columns: new[] { "Id", "Category", "City", "Date", "Description", "Name", "Venue" },
                values: new object[,]
                {
                    { new Guid("1036304c-c007-4618-a85d-394a66d71ae8"), "drinks", "London", new DateTime(2024, 8, 20, 2, 16, 19, 215, DateTimeKind.Utc).AddTicks(6857), "Activity 5 months in future", "Future Activity 5", "Just another pub" },
                    { new Guid("1cd29ac6-b45b-4c84-b236-407a5a8e1778"), "drinks", "London", new DateTime(2024, 7, 20, 2, 16, 19, 215, DateTimeKind.Utc).AddTicks(6855), "Activity 4 months in future", "Future Activity 4", "Yet another pub" },
                    { new Guid("2290bac4-4ac7-4d57-88e0-92489c0af1ff"), "music", "London", new DateTime(2024, 5, 20, 2, 16, 19, 215, DateTimeKind.Utc).AddTicks(6849), "Activity 2 months in future", "Future Activity 2", "O2 Arena" },
                    { new Guid("3622e507-db14-4652-ae06-f33c7cb65c2c"), "travel", "London", new DateTime(2024, 10, 20, 2, 16, 19, 215, DateTimeKind.Utc).AddTicks(6867), "Activity 2 months ago", "Future Activity 7", "Somewhere on the Thames" },
                    { new Guid("8d7afb49-1c23-43e0-95b1-a50fa8016ef3"), "culture", "London", new DateTime(2024, 4, 20, 2, 16, 19, 215, DateTimeKind.Utc).AddTicks(6846), "Activity 1 month in future", "Future Activity 1", "Natural History Museum" },
                    { new Guid("a6ef5866-71a6-4918-b434-7b8bf232aa6a"), "drinks", "London", new DateTime(2024, 6, 20, 2, 16, 19, 215, DateTimeKind.Utc).AddTicks(6853), "Activity 3 months in future", "Future Activity 3", "Another pub" },
                    { new Guid("afb101e0-ba1b-45fe-9a56-50fa700aeeaa"), "drinks", "London", new DateTime(2024, 1, 20, 2, 16, 19, 215, DateTimeKind.Utc).AddTicks(6827), "Activity 2 months ago", "Past Activity 1", "Pub" },
                    { new Guid("cd378633-bb0c-4ed2-ae22-036e882647bf"), "culture", "Paris", new DateTime(2024, 2, 20, 2, 16, 19, 215, DateTimeKind.Utc).AddTicks(6844), "Activity 1 month ago", "Past Activity 2", "Louvre" },
                    { new Guid("ec3dd68c-7b53-49fe-9b1e-8235bc0ca635"), "music", "London", new DateTime(2024, 9, 20, 2, 16, 19, 215, DateTimeKind.Utc).AddTicks(6864), "Activity 6 months in future", "Future Activity 6", "Roundhouse Camden" },
                    { new Guid("f28cda24-c5d6-47e3-828c-75700d5838fb"), "film", "London", new DateTime(2024, 11, 20, 2, 16, 19, 215, DateTimeKind.Utc).AddTicks(6869), "Activity 8 months in future", "Future Activity 8", "Cinema" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Activities",
                keyColumn: "Id",
                keyValue: new Guid("1036304c-c007-4618-a85d-394a66d71ae8"));

            migrationBuilder.DeleteData(
                table: "Activities",
                keyColumn: "Id",
                keyValue: new Guid("1cd29ac6-b45b-4c84-b236-407a5a8e1778"));

            migrationBuilder.DeleteData(
                table: "Activities",
                keyColumn: "Id",
                keyValue: new Guid("2290bac4-4ac7-4d57-88e0-92489c0af1ff"));

            migrationBuilder.DeleteData(
                table: "Activities",
                keyColumn: "Id",
                keyValue: new Guid("3622e507-db14-4652-ae06-f33c7cb65c2c"));

            migrationBuilder.DeleteData(
                table: "Activities",
                keyColumn: "Id",
                keyValue: new Guid("8d7afb49-1c23-43e0-95b1-a50fa8016ef3"));

            migrationBuilder.DeleteData(
                table: "Activities",
                keyColumn: "Id",
                keyValue: new Guid("a6ef5866-71a6-4918-b434-7b8bf232aa6a"));

            migrationBuilder.DeleteData(
                table: "Activities",
                keyColumn: "Id",
                keyValue: new Guid("afb101e0-ba1b-45fe-9a56-50fa700aeeaa"));

            migrationBuilder.DeleteData(
                table: "Activities",
                keyColumn: "Id",
                keyValue: new Guid("cd378633-bb0c-4ed2-ae22-036e882647bf"));

            migrationBuilder.DeleteData(
                table: "Activities",
                keyColumn: "Id",
                keyValue: new Guid("ec3dd68c-7b53-49fe-9b1e-8235bc0ca635"));

            migrationBuilder.DeleteData(
                table: "Activities",
                keyColumn: "Id",
                keyValue: new Guid("f28cda24-c5d6-47e3-828c-75700d5838fb"));
        }
    }
}
